using HS1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace HS1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NxenesiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public NxenesiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select NxenesiId,NxenesiName,NxenesiSurname,Klasa,Paralelja,Orari,
                            convert(varchar(10),DateOfJoining,120) as DateOfJoining,PhotoFileName
                            from
                            dbo.Nxenesi
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Nxenesi nx)
        {
            string query = @"
                            insert into dbo.Nxenesi
                            (NxenesiName,NxenesiSurname,Klasa,Paralelja,Orari, DateOfJoining, PhotoFileName)
                            values (@NxenesiName,@NxenesiSurname, @Klasa,@Paralelja,@Orari, @DateOfJoining, @PhotoFileName)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NxenesiName", nx.NxenesiName);
                    myCommand.Parameters.AddWithValue("@NxenesiSurname", nx.NxenesiSurname);
                    myCommand.Parameters.AddWithValue("@Klasa", nx.Klasa);
                    myCommand.Parameters.AddWithValue("@Paralelja", nx.Paralelja);
                    myCommand.Parameters.AddWithValue("@Orari", nx.Orari);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", nx.DateOfJoining);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", nx.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Nxenesi nx)
        {
            string query = @"
                            update dbo.Nxenesi
                            set NxenesiName= @NxenesiName,
                            NxenesiSurname= @NxenesiSurname,
                            Klasa=@Klasa,
                            Paralelja=@Paralelja,
                            Orari=@Orari,
                            DateOfJoining=@DateOfJoining,
                            PhotoFileName=@PhotoFileName
                            where NxenesiId=@NxenesiId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NxenesiId", nx.NxenesiId);
                    myCommand.Parameters.AddWithValue("@NxenesiName", nx.NxenesiName);
                    myCommand.Parameters.AddWithValue("@NxenesiSurname", nx.NxenesiSurname);
                    myCommand.Parameters.AddWithValue("@Klasa", nx.Klasa);
                    myCommand.Parameters.AddWithValue("@Paralelja", nx.Paralelja);
                    myCommand.Parameters.AddWithValue("@Orari", nx.Orari);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", nx.DateOfJoining);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", nx.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                            delete from dbo.Nxenesi
                            where NxenesiId=@NxenesiId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@NxenesiId", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }

        [Route("SaveFile")]
        [HttpPost]

        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("anonymous.png");
            }
        }
    }
}

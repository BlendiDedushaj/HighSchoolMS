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
    public class LibriController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public LibriController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select LibriId,LibriName,Lenda,
                            PhotoFileName
                            from
                            dbo.Libri
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProfesoriAppCon");
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
        public JsonResult Post(Libri lib)
        {
            string query = @"
                            insert into dbo.Libri
                            (LibriName, Lenda, PhotoFileName)
                            values (@LibriName, @Lenda, @PhotoFileName)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProfesoriAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@LibriName", lib.LibriName);
                    myCommand.Parameters.AddWithValue("@Lenda", lib.Lenda);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", lib.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Libri lib)
        {
            string query = @"
                            update dbo.Libri
                            set LibriName= @LibriName,
                            Lenda=@Lenda,
                            PhotoFileName=@PhotoFileName
                            where LibriId=@LibriId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProfesoriAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@LibriId", lib.LibriId);
                    myCommand.Parameters.AddWithValue("@LibriName", lib.LibriName);
                    myCommand.Parameters.AddWithValue("@Lenda", lib.Lenda);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", lib.PhotoFileName);
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
                            delete from dbo.Libri
                            where LibriId=@LibriId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProfesoriAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@LibriId", id);

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

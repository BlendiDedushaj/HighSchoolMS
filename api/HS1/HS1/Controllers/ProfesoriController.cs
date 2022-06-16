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
    public class ProfesoriController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public ProfesoriController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select ProfesoriId,ProfesoriName,Lenda,
                            convert(varchar(10),DateOfJoining,120) as DateOfJoining,PhotoFileName
                            from
                            dbo.Profesori
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
        public JsonResult Post(Profesori prof)
        {
            string query = @"
                            insert into dbo.Profesori
                            (ProfesoriName, Lenda, DateOfJoining, PhotoFileName)
                            values (@ProfesoriName, @Lenda, @DateOfJoining, @PhotoFileName)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProfesoriName", prof.ProfesoriName);
                    myCommand.Parameters.AddWithValue("@Lenda", prof.Lenda);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", prof.DateOfJoining);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", prof.PhotoFileName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Profesori prof)
        {
            string query = @"
                            update dbo.Profesori
                            set ProfesoriName= @ProfesoriName,
                            Lenda=@Lenda,
                            DateOfJoining=@DateOfJoining,
                            PhotoFileName=@PhotoFileName
                            where ProfesoriId=@ProfesoriId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProfesoriId", prof.ProfesoriId);
                    myCommand.Parameters.AddWithValue("@ProfesoriName", prof.ProfesoriName);
                    myCommand.Parameters.AddWithValue("@Lenda", prof.Lenda);
                    myCommand.Parameters.AddWithValue("@DateOfJoining", prof.DateOfJoining);
                    myCommand.Parameters.AddWithValue("@PhotoFileName", prof.PhotoFileName);
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
                            delete from dbo.Profesori
                            where ProfesoriId=@ProfesoriId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ProfesoriId", id);

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

                using(var stream=new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch(Exception)
            {

                return new JsonResult("anonymous.png");
            }
        }
    }
}

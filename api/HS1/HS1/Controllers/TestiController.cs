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
    public class TestiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public TestiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select TestiId,TestiName,Profesori,Lenda,Ora,Data
                            from
                            dbo.Testi
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
        public JsonResult Post(Testi te)
        {
            string query = @"
                            insert into dbo.Testi
                            (TestiName,Profesori,Lenda,Ora,Data)
                            values (@TestiName,@Profesori,@Lenda,@Ora,@Data)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@TestiName", te.TestiName);
                    myCommand.Parameters.AddWithValue("@Profesori", te.Profesori);
                    myCommand.Parameters.AddWithValue("@Lenda", te.Lenda);
                    myCommand.Parameters.AddWithValue("@Ora", te.Ora);
                    myCommand.Parameters.AddWithValue("@Data", te.Data);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Testi te)
        {
            string query = @"
                            update dbo.Testi
                            set TestiName=@TestiName, 
                            Profesori= @Profesori,
                            Lenda= @Lenda,
                            Ora= @Ora,
                            Data= @Data
                            where TestiId=@TestiId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@TestiId", te.TestiId);
                    myCommand.Parameters.AddWithValue("@TestiName", te.TestiName);
                    myCommand.Parameters.AddWithValue("@Profesori", te.Profesori);
                    myCommand.Parameters.AddWithValue("@Lenda", te.Lenda);
                    myCommand.Parameters.AddWithValue("@Ora", te.Ora);
                    myCommand.Parameters.AddWithValue("@Data", te.Data);
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
                            delete from dbo.Testi
                            where TestiId=@TestiId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@TestiId", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
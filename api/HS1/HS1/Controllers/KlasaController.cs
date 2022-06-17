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
    public class KlasaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public KlasaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select KlasaId,KlasaName
                            from
                            dbo.Klasa
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
        public JsonResult Post(Klasa kl)
        {
            string query = @"
                            insert into dbo.Klasa
                            (KlasaName)
                            values (@KlasaName)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@KlasaName", kl.KlasaName);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Klasa kl)
        {
            string query = @"
                            update dbo.Klasa
                            set KlasaName= @KlasaName
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
                    myCommand.Parameters.AddWithValue("@KlasaId", kl.KlasaId);
                    myCommand.Parameters.AddWithValue("@KlasaName", kl.KlasaName);
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
                            delete from dbo.Klasa
                            where KlasaId=@KlasaId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@KlasaId", id);

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

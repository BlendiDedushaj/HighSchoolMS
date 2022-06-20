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
    public class VleresimiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public VleresimiController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select VleresimiId,Lenda,Profesori,Nxenesi,Klasa,Paralelja,Orari,Nota,
                            convert(varchar(10),Data,120) as Data
                            from
                            dbo.Vleresimi
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
        public JsonResult Post(Vleresimi vl)
        {
            string query = @"
                            insert into dbo.Vleresimi
                            (Lenda,Profesori,Nxenesi,Klasa,Paralelja,Orari,Nota,Data)
                            values (@Lenda,@Profesori,@Nxenesi,@Klasa,@Paralelja,@Orari,@Nota,@Data)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Lenda", vl.Lenda);
                    myCommand.Parameters.AddWithValue("@Profesori", vl.Profesori);
                    myCommand.Parameters.AddWithValue("@Nxenesi", vl.Nxenesi);
                    myCommand.Parameters.AddWithValue("@Klasa", vl.Klasa);
                    myCommand.Parameters.AddWithValue("@Paralelja", vl.Paralelja);
                    myCommand.Parameters.AddWithValue("@Orari", vl.Orari);
                    myCommand.Parameters.AddWithValue("@Nota", vl.Nota);
                    myCommand.Parameters.AddWithValue("@Data", vl.Data);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close(); 
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Vleresimi vl)
        {
            string query = @"
                            update dbo.Vleresimi
                            set Lenda= @Lenda,
                            Profesori= @Profesori,
                            Nxenesi= @Nxenesi,
                            Klasa=@Klasa,
                            Paralelja=@Paralelja,
                            Orari=@Orari,
                            Nota=@Nota,
                            Data=@Data
                            where VleresimiId=@VleresimiId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@VleresimiId", vl.VleresimiId);
                    myCommand.Parameters.AddWithValue("@Lenda", vl.Lenda);
                    myCommand.Parameters.AddWithValue("@Profesori", vl.Profesori);
                    myCommand.Parameters.AddWithValue("@Nxenesi", vl.Nxenesi);
                    myCommand.Parameters.AddWithValue("@Klasa", vl.Klasa);
                    myCommand.Parameters.AddWithValue("@Paralelja", vl.Paralelja);
                    myCommand.Parameters.AddWithValue("@Orari", vl.Orari);
                    myCommand.Parameters.AddWithValue("@Nota", vl.Nota);
                    myCommand.Parameters.AddWithValue("@Data", vl.Data);
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
                            delete from dbo.Vleresimi
                            where VleresimiId=@VleresimiId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@VleresimiId", id);

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

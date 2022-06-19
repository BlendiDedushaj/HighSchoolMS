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
    public class AutobusatController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public AutobusatController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select AutobusatId,AutobusatName,Orari,OraNisjes,OraMberritjes
                            from
                            dbo.Autobusat
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
        public JsonResult Post(Autobusat auto)
        {
            string query = @"
                            insert into dbo.Autobusat
                            (AutobusatName,Orari,OraNisjes,OraMberritjes)
                            values (@AutobusatName,@Orari,@OraNisjes,@OraMberritjes)
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@AutobusatName", auto.AutobusatName);
                    myCommand.Parameters.AddWithValue("@Orari", auto.Orari);
                    myCommand.Parameters.AddWithValue("@OraNisjes", auto.OraNisjes);
                    myCommand.Parameters.AddWithValue("@OraMberritjes", auto.OraMberritjes);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Autobusat auto)
        {
            string query = @"
                            update dbo.Autobusat
                            set AutobusatName= @AutobusatName,
                            Orari= @Orari,
                            OraNisjes= @OraNisjes,
                            OraMberritjes= @OraMberritjes,
                            where AutobusatId=@AutobusatId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@AutobusatName", auto.AutobusatName);
                    myCommand.Parameters.AddWithValue("@Orari", auto.Orari);
                    myCommand.Parameters.AddWithValue("@OraNisjes", auto.OraNisjes);
                    myCommand.Parameters.AddWithValue("@OraMberritjes", auto.OraMberritjes);
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
                            delete from dbo.Autobusat
                            where AutobusatId=@AutobusatId
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MyAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@AutobusatId", id);

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

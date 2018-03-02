using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ToDoApplication.Models;
using ToDoApplication.Repo.Interfaces;

namespace ToDoApplication.Repo
{
    public class ItemRepository : iItemRepository
    {
        string cnnString = System.Configuration.ConfigurationManager.ConnectionStrings["ToDoDBConn"].ConnectionString;

        public List<ToDoItem> GetItemList()
        {
            List<ToDoItem> itemList = new List<ToDoItem>();

            SqlConnection cnn = new SqlConnection(cnnString);

            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();
            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "get_itemList";
           
            cnn.Open();
            da.SelectCommand = cmd;
            DataSet ds = new DataSet();

            da.Fill(ds);
            cnn.Close();

            foreach(DataRow dr in ds.Tables[0].Rows)
            {
                itemList.Add(new ToDoItem(dr));
            }

            return itemList;
        }

        public ToDoItem SaveNewItem(string name)
        {
            ToDoItem item = new ToDoItem();

            SqlConnection cnn = new SqlConnection(cnnString);

            SqlCommand cmd = new SqlCommand();
            SqlDataAdapter da = new SqlDataAdapter();
            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "insert_item";
            //add any parameters the stored procedure might require
            cmd.Parameters.Add(new SqlParameter("@itemName", name));
            cnn.Open();
            da.SelectCommand = cmd;
            DataSet ds = new DataSet();

            da.Fill(ds);
            cnn.Close();

            if(ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                item = new ToDoItem(ds.Tables[0].Rows[0]);
            }
            

            return item;
        }

        public void CompleteItem(int itemID)
        {
            //save to the db
            
            SqlConnection cnn = new SqlConnection(cnnString);

            SqlCommand cmd = new SqlCommand();

            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "complete_item";
            //add any parameters the stored procedure might require
            cmd.Parameters.Add(new SqlParameter("@isCompleted", true));
            cmd.Parameters.Add(new SqlParameter("@ItemID", itemID));
            cnn.Open();
            cmd.ExecuteNonQuery();
            cnn.Close();
        }

        public ToDoItem UpdateItem(ToDoItem item)
        {

            SqlConnection cnn = new SqlConnection(cnnString);

            SqlCommand cmd = new SqlCommand();

            cmd.Connection = cnn;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.CommandText = "update_item";
            //add any parameters the stored procedure might require
            cmd.Parameters.Add(new SqlParameter("@itemName", item.ItemName));
            cmd.Parameters.Add(new SqlParameter("@ItemID", item.ItemID));
            cnn.Open();
            cmd.ExecuteNonQuery();
            cnn.Close();


            return item;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace ToDoApplication.Models
{
    public class ToDoItem
    {
        public int ItemID { get; set; }
        public string ItemName { get; set; }
        public bool? isCompleted { get; set; }
        public ToDoItem(int id, string name)
        {
            this.ItemID = id;
            this.ItemName = name;
        }
        public ToDoItem(DataRow dr)
        {
            this.ItemID = (int)dr["itemID"];
            this.ItemName = dr["ItemName"].ToString();
            this.isCompleted = (bool)dr["isCompleted"];
        }

        public ToDoItem()
        {
        }
    }
}
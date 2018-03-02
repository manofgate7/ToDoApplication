using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDoApplication.Models;
using ToDoApplication.Repo;

namespace ToDoApplication.Controllers
{
    public class HomeController : Controller
    {
        public ItemRepository itemRepo = new ItemRepository();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public List<ToDoItem> GetList()
        {
            List<ToDoItem> itemList = itemRepo.GetItemList();

            return itemList;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoApplication.Models;

namespace ToDoApplication.Repo.Interfaces
{
  public interface iItemRepository
  {
    List<ToDoItem> GetItemList();
    ToDoItem SaveNewItem(string name);
    void CompleteItem(int itemID);
    ToDoItem UpdateItem(ToDoItem item);
  }
}

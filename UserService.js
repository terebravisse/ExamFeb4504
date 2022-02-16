//8ewroume oti ginetai h sundesh allou... Kai auth h klash kaleitai apo allou...

public class UserService{

  public string username, password;
  public boolean pretest = false;

  public UserService(string username, string password, boolean pretest){

  this.username = username;
  this.password = password;
  this.pretest = pretest;

  }


 public boolean changePassword(string username, string password, boolean pretest){

    if (password.length() < 8 && db.getUser(username) == true){

      db.changeUserPassword(username, password);
      return true;

    }
    else
      return false;

  }


}





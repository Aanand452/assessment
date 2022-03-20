import http from "../http-common";
class UserService{
  getAll() {
    return http.get("/user");
  }
  get(id) {
    return http.get(`/user/${id}`);
  }
  create(data) {
    return http.post("/user", data);
  }
  update(id, data) {
    return http.put(`/user/${id}`, data);
  }
  
}
export default new UserService();
class GreetingService {
  basePath = "/api/greeting";

  getGreeting() {
    return fetch(this.basePath)
      .then(response => response.json());
  }
}
export default new GreetingService();

import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDb {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async sendReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response;
  }
}

export default TheRestaurantDb;

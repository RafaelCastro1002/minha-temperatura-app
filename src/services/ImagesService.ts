import ImageApi from "../apis/ImageApi";

export default class ImagesServices extends ImageApi {
  async getImageFromCity(city: string) {
    const result = await this._getImages(city);

    return result.response?.results.map((r) => r.urls.regular);
  }
}

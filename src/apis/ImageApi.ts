import { ApiResponse } from "unsplash-js/dist/helpers/response";
import imageApi from "../configs/apis/image";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

export default class ImageApi {
  private _api: typeof imageApi;

  constructor() {
    this._api = imageApi;
  }

  protected _getImages(search: string): Promise<ApiResponse<Photos>> {
    return this._api.search.getPhotos({
      query: search,
    });
  }
}

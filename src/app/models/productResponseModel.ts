import { Product } from "./product";
import { ResponseModel } from "./responseModel";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

export interface ProductResponseModel extends ResponseModel{
  data:Product[],

}

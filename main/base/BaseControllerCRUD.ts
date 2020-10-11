import 'module-alias/register';
import BaseModel from "@/db/models/BaseModel";
import BaseServiceCRUD from './BaseServiceCRUD';

class BaseControllerCRUD {
  service: BaseServiceCRUD;
  constructor(service) {
    this.service = service;
  }

  getMany(request): Promise<BaseModel> {
    const { query } = request;
    if (query && typeof query.filter === 'string') {
      query.filter = JSON.parse(query.filter);
    }
    return this.service.getMany(query);
  }

  count() {
    return this.service.count();
  }

  getOne(request) {
    const { id } = request.params;
    return this.service.getOne(id);
  }

  createOne(request) {
    const { payload } = request;
    return this.service.createOne(payload);
  }

  updateOne(request) {
    const { params, payload } = request;
    const { id } = params;
    return this.service.updateOne(id, payload);
  }

  deleteOne(request) {
    const { id } = request.params;
    return this.service.deleteOne(id);
  }
}

export default BaseControllerCRUD;
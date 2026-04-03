import { CreateOptions, HydratedDocument, Model } from "mongoose";

  export abstract class BaseRepository<TRawDocument>{
    constructor(protected model:Model<TRawDocument>){}
    
    async create({data , options}:{data:Partial<TRawDocument>[] , options?:CreateOptions }):Promise<HydratedDocument<TRawDocument>[]>{
        return await this.model.create(data as any , options)
    }

    async findOne({
      filter
    }: {
      filter: any
    }): Promise<HydratedDocument<TRawDocument> | null> {
      return await this.model.findOne(filter);
    }


async findAll(filter: any): Promise<HydratedDocument<TRawDocument>[]> {
  const docs = await this.model.find(filter);
  return docs as HydratedDocument<TRawDocument>[];
}

}
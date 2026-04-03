"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create({ data, options }) {
        return await this.model.create(data, options);
    }
    async findOne({ filter }) {
        return await this.model.findOne(filter);
    }
    async findAll(filter) {
        const docs = await this.model.find(filter);
        return docs;
    }
}
exports.BaseRepository = BaseRepository;

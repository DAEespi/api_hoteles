import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RepositorioFotos} from '../models';
import {RepositorioFotosRepository} from '../repositories';

export class RepositorioFotosController {
  constructor(
    @repository(RepositorioFotosRepository)
    public repositorioFotosRepository : RepositorioFotosRepository,
  ) {}

  @post('/repositorio-fotos')
  @response(200, {
    description: 'RepositorioFotos model instance',
    content: {'application/json': {schema: getModelSchemaRef(RepositorioFotos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepositorioFotos, {
            title: 'NewRepositorioFotos',
            exclude: ['id'],
          }),
        },
      },
    })
    repositorioFotos: Omit<RepositorioFotos, 'id'>,
  ): Promise<RepositorioFotos> {
    return this.repositorioFotosRepository.create(repositorioFotos);
  }

  @get('/repositorio-fotos/count')
  @response(200, {
    description: 'RepositorioFotos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RepositorioFotos) where?: Where<RepositorioFotos>,
  ): Promise<Count> {
    return this.repositorioFotosRepository.count(where);
  }

  @get('/repositorio-fotos')
  @response(200, {
    description: 'Array of RepositorioFotos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RepositorioFotos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RepositorioFotos) filter?: Filter<RepositorioFotos>,
  ): Promise<RepositorioFotos[]> {
    return this.repositorioFotosRepository.find(filter);
  }

  @patch('/repositorio-fotos')
  @response(200, {
    description: 'RepositorioFotos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepositorioFotos, {partial: true}),
        },
      },
    })
    repositorioFotos: RepositorioFotos,
    @param.where(RepositorioFotos) where?: Where<RepositorioFotos>,
  ): Promise<Count> {
    return this.repositorioFotosRepository.updateAll(repositorioFotos, where);
  }

  @get('/repositorio-fotos/{id}')
  @response(200, {
    description: 'RepositorioFotos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RepositorioFotos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RepositorioFotos, {exclude: 'where'}) filter?: FilterExcludingWhere<RepositorioFotos>
  ): Promise<RepositorioFotos> {
    return this.repositorioFotosRepository.findById(id, filter);
  }

  @patch('/repositorio-fotos/{id}')
  @response(204, {
    description: 'RepositorioFotos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepositorioFotos, {partial: true}),
        },
      },
    })
    repositorioFotos: RepositorioFotos,
  ): Promise<void> {
    await this.repositorioFotosRepository.updateById(id, repositorioFotos);
  }

  @put('/repositorio-fotos/{id}')
  @response(204, {
    description: 'RepositorioFotos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() repositorioFotos: RepositorioFotos,
  ): Promise<void> {
    await this.repositorioFotosRepository.replaceById(id, repositorioFotos);
  }

  @del('/repositorio-fotos/{id}')
  @response(204, {
    description: 'RepositorioFotos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.repositorioFotosRepository.deleteById(id);
  }
}

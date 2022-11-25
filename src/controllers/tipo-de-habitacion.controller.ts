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
import {TipoDeHabitacion} from '../models';
import {TipoDeHabitacionRepository} from '../repositories';

export class TipoDeHabitacionController {
  constructor(
    @repository(TipoDeHabitacionRepository)
    public tipoDeHabitacionRepository : TipoDeHabitacionRepository,
  ) {}

  @post('/tipo-de-habitacions')
  @response(200, {
    description: 'TipoDeHabitacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(TipoDeHabitacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoDeHabitacion, {
            title: 'NewTipoDeHabitacion',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoDeHabitacion: Omit<TipoDeHabitacion, 'id'>,
  ): Promise<TipoDeHabitacion> {
    return this.tipoDeHabitacionRepository.create(tipoDeHabitacion);
  }

  @get('/tipo-de-habitacions/count')
  @response(200, {
    description: 'TipoDeHabitacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TipoDeHabitacion) where?: Where<TipoDeHabitacion>,
  ): Promise<Count> {
    return this.tipoDeHabitacionRepository.count(where);
  }

  @get('/tipo-de-habitacions')
  @response(200, {
    description: 'Array of TipoDeHabitacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TipoDeHabitacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TipoDeHabitacion) filter?: Filter<TipoDeHabitacion>,
  ): Promise<TipoDeHabitacion[]> {
    return this.tipoDeHabitacionRepository.find(filter);
  }

  @patch('/tipo-de-habitacions')
  @response(200, {
    description: 'TipoDeHabitacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoDeHabitacion, {partial: true}),
        },
      },
    })
    tipoDeHabitacion: TipoDeHabitacion,
    @param.where(TipoDeHabitacion) where?: Where<TipoDeHabitacion>,
  ): Promise<Count> {
    return this.tipoDeHabitacionRepository.updateAll(tipoDeHabitacion, where);
  }

  @get('/tipo-de-habitacions/{id}')
  @response(200, {
    description: 'TipoDeHabitacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TipoDeHabitacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TipoDeHabitacion, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoDeHabitacion>
  ): Promise<TipoDeHabitacion> {
    return this.tipoDeHabitacionRepository.findById(id, filter);
  }

  @patch('/tipo-de-habitacions/{id}')
  @response(204, {
    description: 'TipoDeHabitacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoDeHabitacion, {partial: true}),
        },
      },
    })
    tipoDeHabitacion: TipoDeHabitacion,
  ): Promise<void> {
    await this.tipoDeHabitacionRepository.updateById(id, tipoDeHabitacion);
  }

  @put('/tipo-de-habitacions/{id}')
  @response(204, {
    description: 'TipoDeHabitacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoDeHabitacion: TipoDeHabitacion,
  ): Promise<void> {
    await this.tipoDeHabitacionRepository.replaceById(id, tipoDeHabitacion);
  }

  @del('/tipo-de-habitacions/{id}')
  @response(204, {
    description: 'TipoDeHabitacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoDeHabitacionRepository.deleteById(id);
  }
}

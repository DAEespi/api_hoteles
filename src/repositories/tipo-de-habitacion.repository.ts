import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HotelesDataSource} from '../datasources';
import {TipoDeHabitacion, TipoDeHabitacionRelations} from '../models';

export class TipoDeHabitacionRepository extends DefaultCrudRepository<
  TipoDeHabitacion,
  typeof TipoDeHabitacion.prototype.id,
  TipoDeHabitacionRelations
> {
  constructor(
    @inject('datasources.hoteles') dataSource: HotelesDataSource,
  ) {
    super(TipoDeHabitacion, dataSource);
  }
}

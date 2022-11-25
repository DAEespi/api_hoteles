import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HotelesDataSource} from '../datasources';
import {Administrador, AdministradorRelations} from '../models';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.id,
  AdministradorRelations
> {
  constructor(
    @inject('datasources.hoteles') dataSource: HotelesDataSource,
  ) {
    super(Administrador, dataSource);
  }
}

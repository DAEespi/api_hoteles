import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HotelesDataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {
  constructor(
    @inject('datasources.hoteles') dataSource: HotelesDataSource,
  ) {
    super(Cliente, dataSource);
  }
}

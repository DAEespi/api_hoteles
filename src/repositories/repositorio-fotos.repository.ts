import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {HotelesDataSource} from '../datasources';
import {RepositorioFotos, RepositorioFotosRelations} from '../models';

export class RepositorioFotosRepository extends DefaultCrudRepository<
  RepositorioFotos,
  typeof RepositorioFotos.prototype.id,
  RepositorioFotosRelations
> {
  constructor(
    @inject('datasources.hoteles') dataSource: HotelesDataSource,
  ) {
    super(RepositorioFotos, dataSource);
  }
}

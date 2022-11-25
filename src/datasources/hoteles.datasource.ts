import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'hoteles',
  connector: 'mongodb',
  url: 'mongodb+srv://equipo2bdmongo:mongodb2027@cluster0.waoc7.mongodb.net/hoteles?retryWrites=true&w=majority',
  host: '27017',
  port: 27017,
  user: 'equipo2bdmongo',
  password: 'mongodb2027mongodb2027',
  database: 'hoteles',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class HotelesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'hoteles';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.hoteles', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

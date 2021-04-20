import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import * as kplus from 'cdk8s-plus-17';


export class MyChart extends Chart {
   cfgMap: kplus.ConfigMap;

  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    this.cfgMap = new kplus.ConfigMap(this, 'cfg');
    this.cfgMap.addData('test_data', 'data_value');
  }
}

const app = new App();
new MyChart(app, 'cdk8s_esmoduleinterop_bug');
app.synth();

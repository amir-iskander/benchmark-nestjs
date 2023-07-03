import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('microbenchmark')
  microbenchmark(@Query('n') n): string {
    return `Time taken: ${ this.appService.microbenchmarkTest(n) } ms`;
  }
  
  @Get('memorytest')
  memoryTest(@Query('n') n): string {
    return `Memory usage: ${ this.appService.memoryTest(n) } MB`;
  }

  @Get('cputest')
  cpuTest(@Query('n') n) : string {
    return `Time taken: ${ this.appService.cpuTest(n) } ms`;
  }
}

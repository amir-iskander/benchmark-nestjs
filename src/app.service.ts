import { Injectable } from '@nestjs/common';
import { performance } from 'perf_hooks';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Example of a microbenchmark for string concatenation in TypeScript (NestJS):
  microbenchmarkTest(n: number): number {
    const start = performance.now();
    let result = '';
    for (let i = 0; i < n; i++) {
      result += i.toString();
    }
    const end = performance.now();
    return end - start;
  }

  // Example of a memory usage test for a TypeScript (NestJS) server that generates a large amount of data
  memoryTest(n: number): number {
    const start = performance.now();
    const data = [];
    for (let i = 0; i < n; i++) {
      data.push({ id: i, name: `User ${i}` });
    }
    return process.memoryUsage().heapUsed / 1024 / 1024;
  }

  // Example of a CPU usage test for a TypeScript (NestJS) server that performs a lot of calculations
  cpuTest(n: number): number {
    const start = performance.now();
    let result = 0;
    for (let i = 0; i < n; i++) {
      result += i * i;
    }
    const end = performance.now();
    return end - start;
  }
}

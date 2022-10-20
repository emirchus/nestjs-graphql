import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    name: 'HelloWorld',
    description: 'Hello World Query',
  })
  getHelloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, {
    name: 'RandomNumber',
    description: 'Get random number',
  })
  getRandomNumber(): number {
    return Math.random();
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
  })
  getRandomFromZeroTo(@Args('to', { type: () => Int }) to: number): number {
    return (Math.random() * to + 1) | 0;
  }
}

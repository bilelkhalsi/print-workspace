import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();
  });

  describe('status', () => {
    it('should return "ok"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.status()).toEqual({ message: 'ok' });
    });
  });
});

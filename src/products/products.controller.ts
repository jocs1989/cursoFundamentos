import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return 'This action return all products';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      id,
      name: 'teddy',
      price: 50,
    };
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    const old = { id: 10, name: 'teddy', price: '25' };
    return { ...old, ...body };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id, name: 'teddy', price: '35' };
  }
}

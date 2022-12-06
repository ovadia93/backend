import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Client } from "./clients.entity";
import { ClientsService } from "./clients.service";

@Controller("clients")
export class ClientsController {

    @Get()
    getClients() {
        return this.clientsService.getAll();
    }

    @Get(":id")
    getClient(@Param('id', new ParseIntPipe()) clientId: number) {
        return this.clientsService.getSingleClient(clientId);
    }

    @Post()
    addedClient(@Body() item: Client) {
        return this.clientsService.addClient(item);
    }
    @Put()
    updateClient(@Body() item: Client) {
        return this.clientsService.updateClient(item);
    }



    @Delete(":id")
    removeClient(@Param('id', new ParseIntPipe()) clientId: number) {
        return this.clientsService.removeClientById(clientId);
    }

    constructor(private clientsService: ClientsService) { }
}
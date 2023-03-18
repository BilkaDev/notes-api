import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { NotesService } from "./notes.service";
import { Note } from "./model/notes.entity";
import { CreateNoteDto } from "./dto/createNote.dto";
import { UpdateNoteDto } from "./dto/updateNote.dto";

@ApiTags("Notes")

@Controller("notes")
export class NotesController {
  constructor(
    private readonly notesService: NotesService
  ) {
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: [Note],
  })
  getAll() {
    return this.notesService.getAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: Note,
  })
  @ApiResponse({
    status: 404,
    description: 'Job not found',
  })
  getOne(@Param('id') id: string){
    return this.notesService.getOne(id);
  }

  @Post()
  @ApiBody({ type: CreateNoteDto })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: Note,
  })
  @ApiResponse({
    status: 400,
    description: 'Validated error',
  })
  create(@Body() createJobDto: CreateNoteDto) {
    return this.notesService.create(createJobDto);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateNoteDto })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: Note,
  })
  @ApiResponse({
    status: 400,
    description: 'Validated error',
  })
  @ApiResponse({
    status: 404,
    description: 'Note not found',
  })
  update(@Param('id') id: string, @Body() updateJobDto: UpdateNoteDto) {
    return this.notesService.update(id, updateJobDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({
    status: 404,
    description: 'Note not found',
  })
  delete(@Param('id') id: string) {
    return this.notesService.delete(id);
  }
}

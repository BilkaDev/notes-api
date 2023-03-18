import { Injectable, NotFoundException } from "@nestjs/common";
import { Note } from "./model/notes.entity";
import { CreateNoteDto } from "./dto/createNote.dto";
import { UpdateNoteDto } from "./dto/updateNote.dto";

@Injectable()
export class NotesService {
  async getAll() {
    return await Note.find();
  }

  async findOneById(id: string) {
    const note = await Note.findOneBy({ id });
    if (!note) throw new NotFoundException("Note with given id does not exist");
    return note;
  }

  async getOne(id: string) {
    return this.findOneById(id);
  }

  async create(createNoteDto: CreateNoteDto) {
    const createdNote = await Note.create({ ...createNoteDto });
    return await createdNote.save();
  }

  async delete(id: string) {
    const { affected } = await Note.delete(
      {
        id
      }
    );
    if (affected === 0) {
      throw new NotFoundException("Not found note");
    }
    return
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    let note = await this.findOneById(id);
    if (!note) throw new NotFoundException("Not found note");
    note = { ...note, ...updateNoteDto } as Note;
    await note.save();
    return note;
  }
}

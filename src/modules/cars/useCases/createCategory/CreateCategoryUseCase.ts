import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"


interface IRequest{
    name: string;
    description: string
}

/**
 * - Definir o tipo de retorno
 * - Alterar o retorno de erro
 * - Acessar o repositorio
 * - Retornar algo
 */
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ){}

    async execute({ description, name }: IRequest): Promise<void>{
        const categoryAlreadExists = await this.categoriesRepository.findByName(name);

        if(categoryAlreadExists) {
            throw new AppError("Category Alread exists!");
        }

        this.categoriesRepository.create({ name, description });

    }
}

export { CreateCategoryUseCase}
import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";

export class CreateVinculoDto {

    @IsNumber()
    pais: number;

    @IsString()
    @MinLength(1)
    @MaxLength(2)
    tipodoc: string;

    @IsNumber()
    documento: number;

    @IsString()
    @MinLength(1)
    vinculo: string;

}

import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";

export class CreateVinculoDto {

    @IsString()
    @MinLength(1)
    @MaxLength(2)
    pais: string;

    @IsString()
    @MinLength(1)
    @MaxLength(2)
    tipodoc: string;

    @IsString()
    @MinLength(1)
    documento: string;

    @IsString()
    @MinLength(1)
    vinculo: string;

}

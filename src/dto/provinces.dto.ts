import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class ProvincesDto {
	@IsOptional()
	@ApiProperty({ required: false })
	page?: number = 0;

	@IsOptional()
	@ApiProperty({ required: false })
	take?: number = 20;

	@IsOptional()
	@ApiProperty({ required: false })
	orderBy?: string = "name";

	@IsOptional()
	@ApiProperty({ required: false })
	order?: string = "asc";

	@IsOptional()
	@ApiProperty({ required: false })
	search?: string;
}

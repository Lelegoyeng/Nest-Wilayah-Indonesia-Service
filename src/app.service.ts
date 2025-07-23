import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { GetAllDto } from "./utils/dto/get-all.dto";
import { baseResponse } from "./types/response";

@Injectable()
export class AppService {
	constructor(private readonly prismaService: PrismaService) {}

	async provinces(dto: GetAllDto): Promise<baseResponse> {
		const { search, orderBy = "createdAt", order = "desc", take } = dto;
		// const queryOptions: any = {
		// 	select: {
		// 		id: true,
		// 		display: true,
		// 		code: true,
		// 	},
		// 	orderBy: {
		// 		[orderBy]: order,
		// 	},
		// 	take: take,
		// };

		// if (search) {
		// 	queryOptions.where = {
		// 		OR: [{ display: { contains: search } }, { code: { contains: search } }],
		// 	};
		// }

		// const data = await this.prismaService.iCD9.findMany(queryOptions);
		// const formattedData = data.map((item) => ({
		// 	value: item.id,
		// 	label: `${item.code} - ${item.display}`,
		// }));
		return { data: {} };
	}
}

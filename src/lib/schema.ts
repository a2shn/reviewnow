import { z } from "zod";

const authSchema = z.string().email();

export { authSchema };

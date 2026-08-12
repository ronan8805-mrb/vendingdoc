import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { requestSchema } from "@/lib/request-schema";

export const submitMachineRequest = createServerFn({ method: "POST" })
  .validator((data: unknown) => requestSchema.parse(data))
  .handler(async ({ data }) => {
    const sql = await getSql();
    const id = crypto.randomUUID();
    await sql`
      insert into machine_requests (
        id, business_name, contact_name, email, phone, city, members, machines, message
      ) values (
        ${id},
        ${data.businessName},
        ${data.contactName},
        ${data.email},
        ${data.phone},
        ${data.city},
        ${data.members},
        ${data.machines},
        ${data.message ?? ""}
      )
    `;
    return { ok: true as const, id };
  });

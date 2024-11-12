import request from "..";

export const queryList = async (params: any) => {
    return await request.get("/top/mv", { params });
};

export const pageHeaderTemplate: (header: string) => string = (header: string) => {
    return `
    <div style="height: 50px;
            width: 100%;
            display:flex;
            justify-content: center;
            align-items: center;
            background-color: #49cc90;
            -webkit-print-color-adjust: exact;
            font-size: 16px; font-weight: 700;">
        <h1> ${header} </h1>
    </div>
    `;
}

export const pageFooterTemplate: (footer: string) => string = (footer: string) => {
    return `
    <div style="
            width: 100%;
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 4px 8px;
            color: #808080; font-size: 7px;">
        <div> <span>${footer}<span></div>
        <div> <span class="pageNumber"></span>/<span class="totalPages"></span></div>
    </div>
    `;
}
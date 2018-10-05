export default (address) => {
    const addressStart = address.slice(0,6);
    const addressEnd = address.slice(36,42);
    
    return `${addressStart}...${addressEnd}`;
}
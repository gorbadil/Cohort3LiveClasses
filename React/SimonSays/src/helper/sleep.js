function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms));
}

export default sleep;
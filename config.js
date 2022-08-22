const admin = require("firebase-admin");

const serviceAccount = require("./tk-arcade.json");

const options = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tk-arcade.firebaseio.com",
};

const middleware = admin.initializeApp(options);
const db = admin.firestore();

const NETWORK = "maticmum";

const networkConfig = (key) =>
    ({
        bsc: {
            CHAIN_ID: 56,
            HOST: "https://bsc-dataseed1.binance.org:443",
            WSS: "wss://bsc-ws-node.nariox.org:443",
            ARCADE_ADDRESS: "",
            ROOT_ADDRESS: "",
            KING_ADDRESS: "",
            FACTORY_ADDRESS: "",
            ROUTER_ADDRESS: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
            SOURCE_ADDRESS: "",
            TARGET_ADDRESS: "",
            PRIVATE_KEY: "",
            MNEMONIC_STRING: "",
        },
        mainnet: {
            API_KEY: "48ffd5d3a83c4ff1a4b268cf0bd6c245",
            CHAIN_ID: 1,
            HOST: "https://mainnet.infura.io/v3/48ffd5d3a83c4ff1a4b268cf0bd6c245",
            WSS: "wss://mainnet.infura.io/ws/v3/48ffd5d3a83c4ff1a4b268cf0bd6c245",
            ARCADE_ADDRESS: "",
            ROOT_ADDRESS: "",
            KING_ADDRESS: "",
            FACTORY_ADDRESS: "",
            ROUTER_ADDRESS: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            SOURCE_ADDRESS: "",
            TARGET_ADDRESS: "",
            PRIVATE_KEY: "",
            MNEMONIC_STRING: "",
        },
        maticmum: {
            API_KEY: "48e08d3cdaa14b3585dbffa02ca36d1a",
            CHAIN_ID: 80001,
            HOST: "https://polygon-mumbai.infura.io/v3/48e08d3cdaa14b3585dbffa02ca36d1a",
            ARCADE_ADDRESS: "0x1Cf5081614791Aa3B18500bAF64cAbfb2D467628",
            ROOT_ADDRESS: "0x168EfA40108330C4f85f0191bE36169B53dAA719",
            KING_ADDRESS: "0xCBa49b070F522F3A580C02DbFB5464EFe2cC3Ea1",
            FACTORY_ADDRESS: "",
            ROUTER_ADDRESS: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            SOURCE_ADDRESS: "",
            TARGET_ADDRESS: "",
            PRIVATE_KEY: "",
            MNEMONIC_STRING: "",
        },
        ropsten: {
            API_KEY: "9aa3d95b3bc440fa88ea12eaa4456161",
            CHAIN_ID: 3,
            HOST: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            WSS: "wss://ropsten.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            ARCADE_ADDRESS: "",
            ROOT_ADDRESS: "",
            KING_ADDRESS: "",
            FACTORY_ADDRESS: "",
            ROUTER_ADDRESS: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            SOURCE_ADDRESS: "",
            TARGET_ADDRESS: "",
            PRIVATE_KEY: "",
            MNEMONIC_STRING: "",
        }, rinkeby: {
            API_KEY: "47fd1ae5796b4f7e9df50231e0bbfd09",
            CHAIN_ID: 4,
            HOST: "https://rinkeby.infura.io/v3/47fd1ae5796b4f7e9df50231e0bbfd09",
            WSS: "wss://rinkeby.infura.io/ws/v3/47fd1ae5796b4f7e9df50231e0bbfd09",
            ARCADE_ADDRESS: "",
            ROOT_ADDRESS: "",
            KING_ADDRESS: "",
            ROUTER_ADDRESS: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            FACTORY_ADDRESS: "",
            SOURCE_ADDRESS: "",
            TARGET_ADDRESS: "",
            PRIVATE_KEY: "",
            MNEMONIC_STRING: "",
        },
    }[key]);

module.exports = {
    admin: admin,
    middleware: middleware,
    store: db,
    NETWORK: NETWORK,
    ...networkConfig(NETWORK),
};

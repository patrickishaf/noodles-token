import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor Token {
    var owner: Principal = Principal.fromText("6ppnx-uneev-2zpr4-5mxra-qwno2-n7slv-xznma-tln2l-2z5j3-gfxg2-aqe");
    var totalSupply: Nat = 1000000000;
    var symbol: Text = "NDL";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal): async Nat {
        let balance: Nat = switch(balances.get(who)) {
            case null 0;
            case (?result) result;
        };
        return balance;
    };

    public query func getSymbol(): async Text {
        return symbol;
    };
}

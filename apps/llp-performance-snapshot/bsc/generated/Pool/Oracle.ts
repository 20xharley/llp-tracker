// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PricePosted extends ethereum.Event {
  get params(): PricePosted__Params {
    return new PricePosted__Params(this);
  }
}

export class PricePosted__Params {
  _event: PricePosted;

  constructor(event: PricePosted) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PricePosted1 extends ethereum.Event {
  get params(): PricePosted1__Params {
    return new PricePosted1__Params(this);
  }
}

export class PricePosted1__Params {
  _event: PricePosted1;

  constructor(event: PricePosted1) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ReporterAdded extends ethereum.Event {
  get params(): ReporterAdded__Params {
    return new ReporterAdded__Params(this);
  }
}

export class ReporterAdded__Params {
  _event: ReporterAdded;

  constructor(event: ReporterAdded) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ReporterRemoved extends ethereum.Event {
  get params(): ReporterRemoved__Params {
    return new ReporterRemoved__Params(this);
  }
}

export class ReporterRemoved__Params {
  _event: ReporterRemoved;

  constructor(event: ReporterRemoved) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TokenAdded extends ethereum.Event {
  get params(): TokenAdded__Params {
    return new TokenAdded__Params(this);
  }
}

export class TokenAdded__Params {
  _event: TokenAdded;

  constructor(event: TokenAdded) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Oracle__tokenConfigResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getBaseUnits(): BigInt {
    return this.value0;
  }

  getPriceUnits(): BigInt {
    return this.value1;
  }

  getChainlinkPriceFeed(): Address {
    return this.value2;
  }

  getChainlinkDeviation(): BigInt {
    return this.value3;
  }

  getChainlinkTimeout(): BigInt {
    return this.value4;
  }
}

export class Oracle extends ethereum.SmartContract {
  static bind(address: Address): Oracle {
    return new Oracle("Oracle", address);
  }

  PRICE_FEED_ERROR(): BigInt {
    let result = super.call(
      "PRICE_FEED_ERROR",
      "PRICE_FEED_ERROR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRICE_FEED_ERROR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRICE_FEED_ERROR",
      "PRICE_FEED_ERROR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE_FEED_ERROR_SPREAD(): BigInt {
    let result = super.call(
      "PRICE_FEED_ERROR_SPREAD",
      "PRICE_FEED_ERROR_SPREAD():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRICE_FEED_ERROR_SPREAD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRICE_FEED_ERROR_SPREAD",
      "PRICE_FEED_ERROR_SPREAD():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE_FEED_INACTIVE(): BigInt {
    let result = super.call(
      "PRICE_FEED_INACTIVE",
      "PRICE_FEED_INACTIVE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRICE_FEED_INACTIVE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRICE_FEED_INACTIVE",
      "PRICE_FEED_INACTIVE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE_FEED_INACTIVE_SPREAD(): BigInt {
    let result = super.call(
      "PRICE_FEED_INACTIVE_SPREAD",
      "PRICE_FEED_INACTIVE_SPREAD():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRICE_FEED_INACTIVE_SPREAD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRICE_FEED_INACTIVE_SPREAD",
      "PRICE_FEED_INACTIVE_SPREAD():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLastPrice(token: Address): BigInt {
    let result = super.call("getLastPrice", "getLastPrice(address):(uint256)", [
      ethereum.Value.fromAddress(token)
    ]);

    return result[0].toBigInt();
  }

  try_getLastPrice(token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastPrice",
      "getLastPrice(address):(uint256)",
      [ethereum.Value.fromAddress(token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPrice(token: Address, max: boolean): BigInt {
    let result = super.call("getPrice", "getPrice(address,bool):(uint256)", [
      ethereum.Value.fromAddress(token),
      ethereum.Value.fromBoolean(max)
    ]);

    return result[0].toBigInt();
  }

  try_getPrice(token: Address, max: boolean): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getPrice", "getPrice(address,bool):(uint256)", [
      ethereum.Value.fromAddress(token),
      ethereum.Value.fromBoolean(max)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isReporter(param0: Address): boolean {
    let result = super.call("isReporter", "isReporter(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isReporter(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isReporter", "isReporter(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastAnswerBlock(param0: Address): BigInt {
    let result = super.call(
      "lastAnswerBlock",
      "lastAnswerBlock(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_lastAnswerBlock(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastAnswerBlock",
      "lastAnswerBlock(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastAnswerTimestamp(param0: Address): BigInt {
    let result = super.call(
      "lastAnswerTimestamp",
      "lastAnswerTimestamp(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_lastAnswerTimestamp(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastAnswerTimestamp",
      "lastAnswerTimestamp(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastAnswers(param0: Address): BigInt {
    let result = super.call("lastAnswers", "lastAnswers(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_lastAnswers(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastAnswers",
      "lastAnswers(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reporters(param0: BigInt): Address {
    let result = super.call("reporters", "reporters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_reporters(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("reporters", "reporters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tokenConfig(param0: Address): Oracle__tokenConfigResult {
    let result = super.call(
      "tokenConfig",
      "tokenConfig(address):(uint256,uint256,address,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Oracle__tokenConfigResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_tokenConfig(
    param0: Address
  ): ethereum.CallResult<Oracle__tokenConfigResult> {
    let result = super.tryCall(
      "tokenConfig",
      "tokenConfig(address):(uint256,uint256,address,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Oracle__tokenConfigResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  whitelistedTokens(param0: BigInt): Address {
    let result = super.call(
      "whitelistedTokens",
      "whitelistedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_whitelistedTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "whitelistedTokens",
      "whitelistedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AddReporterCall extends ethereum.Call {
  get inputs(): AddReporterCall__Inputs {
    return new AddReporterCall__Inputs(this);
  }

  get outputs(): AddReporterCall__Outputs {
    return new AddReporterCall__Outputs(this);
  }
}

export class AddReporterCall__Inputs {
  _call: AddReporterCall;

  constructor(call: AddReporterCall) {
    this._call = call;
  }

  get reporter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddReporterCall__Outputs {
  _call: AddReporterCall;

  constructor(call: AddReporterCall) {
    this._call = call;
  }
}

export class ConfigTokenCall extends ethereum.Call {
  get inputs(): ConfigTokenCall__Inputs {
    return new ConfigTokenCall__Inputs(this);
  }

  get outputs(): ConfigTokenCall__Outputs {
    return new ConfigTokenCall__Outputs(this);
  }
}

export class ConfigTokenCall__Inputs {
  _call: ConfigTokenCall;

  constructor(call: ConfigTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenDecimals(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get priceFeed(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get priceDecimals(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get chainlinkTimeout(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get chainlinkDeviation(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ConfigTokenCall__Outputs {
  _call: ConfigTokenCall;

  constructor(call: ConfigTokenCall) {
    this._call = call;
  }
}

export class PostPriceCall extends ethereum.Call {
  get inputs(): PostPriceCall__Inputs {
    return new PostPriceCall__Inputs(this);
  }

  get outputs(): PostPriceCall__Outputs {
    return new PostPriceCall__Outputs(this);
  }
}

export class PostPriceCall__Inputs {
  _call: PostPriceCall;

  constructor(call: PostPriceCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PostPriceCall__Outputs {
  _call: PostPriceCall;

  constructor(call: PostPriceCall) {
    this._call = call;
  }
}

export class RemoveReporterCall extends ethereum.Call {
  get inputs(): RemoveReporterCall__Inputs {
    return new RemoveReporterCall__Inputs(this);
  }

  get outputs(): RemoveReporterCall__Outputs {
    return new RemoveReporterCall__Outputs(this);
  }
}

export class RemoveReporterCall__Inputs {
  _call: RemoveReporterCall;

  constructor(call: RemoveReporterCall) {
    this._call = call;
  }

  get reporter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveReporterCall__Outputs {
  _call: RemoveReporterCall;

  constructor(call: RemoveReporterCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

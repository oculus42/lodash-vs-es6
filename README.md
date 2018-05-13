# `_.map()` vs `[].map()`
This is a resource comparison between `_.map()` and `[].map()`, handling an object with 10,000 entries.

## Setup

Generate the json data file with 10,000 entries

```bash
$ node gen
```

## Base Single Test

```bash
$ node vs
```

### Output

```bash
  name        diffRAM  diffHeapTotal  diffHeapUsed  diffExternal  diffCPU  diffTime
  ----------  -------  -------------  ------------  ------------  -------  --------
  native      8        0              85.6484375    0.015625      0.542    1
  lodash      0        0              81.96875      0             0.715    1
  lodash/map  4        0              80.8359375    0             0.66     1
  lodash.map  0        0              80.8359375    0             0.654    0

```

### Remark
Excluding the initial library load, lodash map uses negligible additional resources and time.
A single run can vary substantially. A tool like JSPerf runs the test many thousands of times
to provide a more accurate average.

## Benchmark

Using [benchmark](https://benchmarkjs.com) for better test results.

```bash
$ node bench
```

### Output

#### Node 8.11.1

```bash
native x 6,672 ops/sec ±1.37% (88 runs sampled)
lodash x 7,595 ops/sec ±1.58% (87 runs sampled)
lodash/map x 8,490 ops/sec ±1.19% (88 runs sampled)
lodash.map x 8,566 ops/sec ±1.59% (90 runs sampled)
Fastest is lodash.map
```

#### Node 9.8.0

```bash
native x 7,092 ops/sec ±0.70% (89 runs sampled)
lodash x 8,147 ops/sec ±1.11% (87 runs sampled)
lodash/map x 8,915 ops/sec ±0.78% (87 runs sampled)
lodash.map x 8,789 ops/sec ±1.02% (87 runs sampled)
Fastest is lodash/map,lodash.map
```

#### Node 10.1.0

```bash
native x 22,410 ops/sec ±19.00% (88 runs sampled)
lodash x 7,771 ops/sec ±0.59% (91 runs sampled)
lodash/map x 8,863 ops/sec ±1.50% (90 runs sampled)
lodash.map x 8,950 ops/sec ±1.49% (87 runs sampled)
Fastest is native
```
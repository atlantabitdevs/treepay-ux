const getCreateContract = () => {
  sendRequest(
    `contract create --key=82ad5644f2100d589005efbb0c9c3a2d1d11de4f6051a399a342ab11bba2558a '{"arguments":{"TreePay":{"fee_sats_per_tx":0,"radix":4,"timelock_backpressure":{"RH":1},"participants":[{"address":"tb1q3lu3alvgjjetffslfft77wex7fflagn9g07zf2","amount":0.8},{"address":"tb1qcrppe53d7z0gla2exjxemamzn6mk8qwyvkvqk6","amount":0.2},{"address":"tb1q4zkvslnpkjvg3gh0acdesunnhzfjkd24wdwcu6","amount":0.5},{"address":"tb1qshyzx6fxaks84r7e8u6xwnjvcvamgm9vnqyxq9","amount":0.5},{"address":"tb1qmjcwrx5jprh7wy3znk9hvp783njzuuvzmasvzc","amount":0.25},{"address":"tb1qq20zd4jp6xfa0zqr5d99htm4qu536zkepgmry5","amount":0.75},{"address":"tb1qze6ylt25su67jf4s6j7xyklpkyetykcxhl3cyl","amount":1},{"address":"tb1q8zlnkj9h9xd7653w6shz4u5wsh4uv8lw9ewnpa","amount":1.5},{"address":"tb1qf4fan8xrtxax9zpyz62px28le76lgs95jqmmsg","amount":0.5},{"address":"tb1qn92mc48c828jsatflfywzn226rnzjj7xpj7q5h","amount":1}]}},"context":{"amount":10,"network":"Signet"}}'`
  );
}
const bindContract = () => {
  sendRequest(
    `contract bind --base64_psbt '{"template_hash_to_template_map":{"eae2a630b1aa8537c3e24dfa5806a349567581283a0f108f24548fd390d4e258":{"additional_preconditions":[],"precomputed_template_hash":"eae2a630b1aa8537c3e24dfa5806a349567581283a0f108f24548fd390d4e258","precomputed_template_hash_idx":0,"max_amount_sats":700000000,"min_feerate_sats_vbyte":null,"transaction_literal":{"version":2,"lock_time":0,"input":[{"previous_output":"0000000000000000000000000000000000000000000000000000000000000000:4294967295","script_sig":"","sequence":1,"witness":[]}],"output":[{"value":50000000,"script_pubkey":"00144d53d99cc359ba62882416941328ffcfb5f440b4"},{"value":100000000,"script_pubkey":"00149955bc54f83a8f287569fa48e14d4ad0e6294bc6"},{"value":200000000,"script_pubkey":"5120a4de45ff21b919ada39d02a75fe9b66d5624bef9f168e255d59be21b5f074750"},{"value":350000000,"script_pubkey":"5120b6d2face79fb899d51d386f8a337a29715e8a20cf651006aadbc99aab159e8ea"}]},"outputs_info":[{"sending_amount_sats":50000000,"receiving_contract":{"root_path":"","address":"tb1qf4fan8xrtxax9zpyz62px28le76lgs95jqmmsg","amount_range":{"max_btc":0.5}}},{"sending_amount_sats":100000000,"receiving_contract":{"root_path":"","address":"tb1qn92mc48c828jsatflfywzn226rnzjj7xpj7q5h","amount_range":{"max_btc":1}}},{"sending_amount_sats":200000000,"receiving_contract":{"template_hash_to_template_map":{"91a4c5ae281c2708c962946c3990133b6a82f990ffd39c80366967e6f2b2ac66":{"additional_preconditions":[],"precomputed_template_hash":"91a4c5ae281c2708c962946c3990133b6a82f990ffd39c80366967e6f2b2ac66","precomputed_template_hash_idx":0,"max_amount_sats":200000000,"min_feerate_sats_vbyte":null,"transaction_literal":{"version":2,"lock_time":0,"input":[{"previous_output":"0000000000000000000000000000000000000000000000000000000000000000:4294967295","script_sig":"","sequence":1,"witness":[]}],"output":[{"value":80000000,"script_pubkey":"00148ff91efd8894b2b4a61f4a57ef3b26f253fea265"},{"value":20000000,"script_pubkey":"0014c0c21cd22df09e8ff559348d9df7629eb76381c4"},{"value":50000000,"script_pubkey":"0014a8acc87e61b49888a2efee1b987273b8932b3555"},{"value":50000000,"script_pubkey":"001485c8236926eda07a8fd93f34674e4cc33bb46cac"}]},"outputs_info":[{"sending_amount_sats":80000000,"receiving_contract":{"root_path":"","address":"tb1q3lu3alvgjjetffslfft77wex7fflagn9g07zf2","amount_range":{"max_btc":0.8}}},{"sending_amount_sats":20000000,"receiving_contract":{"root_path":"","address":"tb1qcrppe53d7z0gla2exjxemamzn6mk8qwyvkvqk6","amount_range":{"max_btc":0.2}}},{"sending_amount_sats":50000000,"receiving_contract":{"root_path":"","address":"tb1q4zkvslnpkjvg3gh0acdesunnhzfjkd24wdwcu6","amount_range":{"max_btc":0.5}}},{"sending_amount_sats":50000000,"receiving_contract":{"root_path":"","address":"tb1qshyzx6fxaks84r7e8u6xwnjvcvamgm9vnqyxq9","amount_range":{"max_btc":0.5}}}]}},"root_path":"@root/@root/82ad5644f2100d589005efbb0c9c3a2d1d11de4f6051a399a342ab11bba2558a/@then_fn/@next/expand/#2","address":"tb1p5n0ytlephyv6mguaq2n4l6dkd4tzf0he795wy4w4n03pkhc8gagqxg44yl","known_descriptor":{"XOnly":"tr(72cd6e8422c407fb6d098690f1130b7ded7ec2f7f5e1d30bd9d521f015363793,t:txtmpl(91a4c5ae281c2708c962946c3990133b6a82f990ffd39c80366967e6f2b2ac66))#zknwn9qt"},"amount_range":{"max_btc":2}}},{"sending_amount_sats":350000000,"receiving_contract":{"template_hash_to_template_map":{"b343b1c3b3e784d24577b3ab04e5a4553fc9ec5b2f802c5816ac0fbc0c6e93fc":{"additional_preconditions":[],"precomputed_template_hash":"b343b1c3b3e784d24577b3ab04e5a4553fc9ec5b2f802c5816ac0fbc0c6e93fc","precomputed_template_hash_idx":0,"max_amount_sats":350000000,"min_feerate_sats_vbyte":null,"transaction_literal":{"version":2,"lock_time":0,"input":[{"previous_output":"0000000000000000000000000000000000000000000000000000000000000000:4294967295","script_sig":"","sequence":1,"witness":[]}],"output":[{"value":25000000,"script_pubkey":"0014dcb0e19a9208efe712229d8b7607c78ce42e7182"},{"value":75000000,"script_pubkey":"0014029e26d641d193d78803a34a5baf7507291d0ad9"},{"value":100000000,"script_pubkey":"001416744fad548735e926b0d4bc625be1b132b25b06"},{"value":150000000,"script_pubkey":"001438bf3b48b7299bed522ed42e2af28e85ebc61fee"}]},"outputs_info":[{"sending_amount_sats":25000000,"receiving_contract":{"root_path":"","address":"tb1qmjcwrx5jprh7wy3znk9hvp783njzuuvzmasvzc","amount_range":{"max_btc":0.25}}},{"sending_amount_sats":75000000,"receiving_contract":{"root_path":"","address":"tb1qq20zd4jp6xfa0zqr5d99htm4qu536zkepgmry5","amount_range":{"max_btc":0.75}}},{"sending_amount_sats":100000000,"receiving_contract":{"root_path":"","address":"tb1qze6ylt25su67jf4s6j7xyklpkyetykcxhl3cyl","amount_range":{"max_btc":1}}},{"sending_amount_sats":150000000,"receiving_contract":{"root_path":"","address":"tb1q8zlnkj9h9xd7653w6shz4u5wsh4uv8lw9ewnpa","amount_range":{"max_btc":1.5}}}]}},"root_path":"@root/@root/82ad5644f2100d589005efbb0c9c3a2d1d11de4f6051a399a342ab11bba2558a/@then_fn/@next/expand/#3","address":"tb1pkmf04nnelwye65wnsmu2xdazju273gsv7egsq64dhjv64v2ear4qe5pa37","known_descriptor":{"XOnly":"tr(72cd6e8422c407fb6d098690f1130b7ded7ec2f7f5e1d30bd9d521f015363793,t:txtmpl(b343b1c3b3e784d24577b3ab04e5a4553fc9ec5b2f802c5816ac0fbc0c6e93fc))#mtlpkcc0"},"amount_range":{"max_btc":3.5}}}]}},"root_path":"@root/@root/82ad5644f2100d589005efbb0c9c3a2d1d11de4f6051a399a342ab11bba2558a","address":"tb1p3j9kupe2avrccnd03gr0sgvyk7dztusr5v6ecshxvsm27vxtg99qlq6sa6","known_descriptor":{"XOnly":"tr(72cd6e8422c407fb6d098690f1130b7ded7ec2f7f5e1d30bd9d521f015363793,t:txtmpl(eae2a630b1aa8537c3e24dfa5806a349567581283a0f108f24548fd390d4e258))#6s0j7sn2"},"amount_range":{"max_btc":7}}'`
  );
}
const dockerRequest = (command) => {
  sendRequest(`docker exec -it c1989f032ee54b9391e51adfee4d153551dabf1fe6e9eeec2c3f7ed3160d37fb -c "../app/sapio-cli "${command}"`)
}
const sendRequest = (command) => {
  exec(command, function(err, stdout, stderr) {
    if (err) {
      console.error(err)
    }
    console.log(stdout);
    console.error(stderr)
  });

}
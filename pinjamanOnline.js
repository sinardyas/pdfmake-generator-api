import imageData from './assets/images/headerbase64';

class PinjamanOnline {
	constructor(
		noAnggota,
		namaLengkapKtp,
		jenisKelamin,
		jabatan,
		tempatPelayananTerdaftar,
		pekerjaan,
		tglLahir,
		alamatKtp,
		alamatTinggal,
		noTelp,
		suamiIstriNamaKtp,
		suamiIstriNoAnggota,
		suamiIstriPekerjaan,
		suamiIstriJabatan,
		suamiIstriAlamatKantor,
		suamiIstriNoTelpKantor,
		kerabatNamaKtp,
		kerabatNoAnggota,
		kerabatNoTelp,
		kerabatAlamatKtp,
		kerabatStatusHubungan,
		saldoSimpananSaham,
		saldoSisaPinjaman,
		saldoSimpananMultiguna,
		saldoSimpananMegapolitan,
		jumlahPinjaman,
		jumlahPermohonanPinjaman,
		jenisPinjaman,
		tujuanPinjaman,
		bayaranPerbulan,
		jangkaWaktuPinjaman,
		jumlahPermohonanPinjamanTerbilang,
		jaminanPinjaman,
		hargaJaminan,
		lokasiKondisiJaminan,
		pemilikJaminan,
		statusJaminan
	) {
		this.noAnggota = noAnggota;
		this.namaLengkapKtp = namaLengkapKtp;
		this.jenisKelamin = jenisKelamin;
		this.jabatan = jabatan;
		this.tempatPelayananTerdaftar = tempatPelayananTerdaftar;
		this.pekerjaan = pekerjaan;
		this.tglLahir = tglLahir;
		this.alamatKtp = alamatKtp;
		this.alamatTinggal = alamatTinggal;
		this.noTelp = noTelp;
		this.suamiIstriNamaKtp = suamiIstriNamaKtp;
		this.suamiIstriNoAnggota = suamiIstriNoAnggota;
		this.suamiIstriPekerjaan = suamiIstriPekerjaan;
		this.suamiIstriJabatan = suamiIstriJabatan;
		this.suamiIstriAlamatKantor = suamiIstriAlamatKantor;
		this.suamiIstriNoTelpKantor = suamiIstriNoTelpKantor;
		this.kerabatNamaKtp = kerabatNamaKtp;
		this.kerabatNoAnggota = kerabatNoAnggota;
		this.kerabatNoTelp = kerabatNoTelp;
		this.kerabatAlamatKtp = kerabatAlamatKtp;
		this.kerabatStatusHubungan = kerabatStatusHubungan;
		this.saldoSimpananSaham = saldoSimpananSaham;
		this.saldoSisaPinjaman = saldoSisaPinjaman;
		this.saldoSimpananMultiguna = saldoSimpananMultiguna;
		this.saldoSimpananMegapolitan = saldoSimpananMegapolitan;
		this.jumlahPinjaman = jumlahPinjaman;
		this.jumlahPermohonanPinjaman = jumlahPermohonanPinjaman;
		this.jenisPinjaman = jenisPinjaman;
		this.tujuanPinjaman = tujuanPinjaman;
		this.bayaranPerbulan = bayaranPerbulan;
		this.jangkaWaktuPinjaman = jangkaWaktuPinjaman;
		this.jumlahPermohonanPinjamanTerbilang = jumlahPermohonanPinjamanTerbilang;
		this.jaminanPinjaman = jaminanPinjaman;
		this.hargaJaminan = hargaJaminan;
		this.lokasiKondisiJaminan = lokasiKondisiJaminan;
		this.pemilikJaminan = pemilikJaminan;
		this.statusJaminan = statusJaminan;
	}

	clone(data) {
		this.noAnggota = data.noAnggota ? data.noAnggota : '';
		this.namaLengkapKtp = data.namaLengkapKtp ? data.namaLengkapKtp : '';
		this.jenisKelamin = data.jenisKelamin ? data.jenisKelamin : '';
		this.jabatan = data.jabatan ? data.jabatan : '';
		this.tempatPelayananTerdaftar = data.tempatPelayananTerdaftar ? data.tempatPelayananTerdaftar : '';
		this.pekerjaan = data.pekerjaan ? data.pekerjaan : '';
		this.tglLahir = data.tglLahir ? data.tglLahir : '';
		this.alamatKtp = data.alamatKtp ? data.alamatKtp : '';
		this.alamatTinggal = data.alamatTinggal ? data.alamatTinggal : '';
		this.noTelp = data.noTelp ? data.noTelp : '';
		this.suamiIstriNamaKtp = data.suamiIstriNamaKtp ? data.suamiIstriNamaKtp : '';
		this.suamiIstriNoAnggota = data.suamiIstriNoAnggota ? data.suamiIstriNoAnggota : '';
		this.suamiIstriPekerjaan = data.suamiIstriPekerjaan ? data.suamiIstriPekerjaan : '';
		this.suamiIstriJabatan = data.suamiIstriJabatan ? data.suamiIstriJabatan : '';
		this.suamiIstriAlamatKantor = data.suamiIstriAlamatKantor ? data.suamiIstriAlamatKantor : '';
		this.suamiIstriNoTelpKantor = data.suamiIstriNoTelpKantor ? data.suamiIstriNoTelpKantor : '';
		this.kerabatNamaKtp = data.kerabatNamaKtp ? data.kerabatNamaKtp : '';
		this.kerabatNoAnggota = data.kerabatNoAnggota ? data.kerabatNoAnggota : '';
		this.kerabatNoTelp = data.kerabatNoTelp ? data.kerabatNoTelp : '';
		this.kerabatAlamatKtp = data.kerabatAlamatKtp ? data.kerabatAlamatKtp : '';
		this.kerabatStatusHubungan = data.kerabatStatusHubungan ? data.kerabatStatusHubungan : '';
		this.saldoSimpananSaham = data.saldoSimpananSaham ? data.saldoSimpananSaham : '';
		this.saldoSisaPinjaman = data.saldoSisaPinjaman ? data.saldoSisaPinjaman : '';
		this.saldoSimpananMultiguna = data.saldoSimpananMultiguna ? data.saldoSimpananMultiguna : '';
		this.saldoSimpananMegapolitan = data.saldoSimpananMegapolitan ? data.saldoSimpananMegapolitan : '';
		this.jumlahPinjaman = data.jumlahPinjaman ? data.jumlahPinjaman : '';
		this.jumlahPermohonanPinjaman = data.jumlahPermohonanPinjaman ? data.jumlahPermohonanPinjaman : '';
		this.jenisPinjaman = data.jenisPinjaman ? data.jenisPinjaman : '';
		this.tujuanPinjaman = data.tujuanPinjaman ? data.tujuanPinjaman : '';
		this.bayaranPerbulan = data.bayaranPerbulan ? data.bayaranPerbulan : '';
		this.jangkaWaktuPinjaman = data.jangkaWaktuPinjaman ? data.jangkaWaktuPinjaman : '';
		this.jumlahPermohonanPinjamanTerbilang = data.jumlahPermohonanPinjamanTerbilang ? data.jumlahPermohonanPinjamanTerbilang : '';
		this.jaminanPinjaman = data.jaminanPinjaman ? data.jaminanPinjaman : '';
		this.hargaJaminan = data.hargaJaminan ? data.hargaJaminan : '';
		this.lokasiKondisiJaminan = data.lokasiKondisiJaminan ? data.lokasiKondisiJaminan : '';
		this.pemilikJaminan = data.pemilikJaminan ? data.pemilikJaminan : '';
		this.statusJaminan = data.statusJaminan ? data.statusJaminan : '';

		return this;
	}
}

const templatePdf = (data) => {
	const userData = new PinjamanOnline().clone(data);

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return {
		content: [
			{
				image: 'headerImg',
				width: 550
			},
			'\n',
			{
				text: 'SURAT PERMOHONAN PINJAMAN',
				style: 'header'
			},
			'\n',
			{
				columns: [
					{
						text: `Nama Pemohon: ${userData.namaLengkapKtp}`,
						width: '70%'
					},
					{
						text: `Tanggal: ${day} - ${month} - ${year}`
					}
				]
			},
			{
				text: 'A. DATA DIRI ANGGOTA',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: '1. Nama (Sesuai KTP)',
						width: 160
					},
					{
						text: `: ${userData.namaLengkapKtp}`,
						width: 160
					},
					{
						text: 'No. Buku Anggota\t: 14110110099'
					}
				]
			},
			{
				columns: [
					{
						text: '2. Pekerjaan`',
						width: 160
					},
					{
						text: `: ${userData.pekerjaan}`,
						width: 160
					},
					{
						text: `Jabatan Sekarang\t: ${userData.jabatan}`
					}
				]
			},
			{
				columns: [
					{
						text: '3. Tempat/Tanggal Lahir',
						width: 160
					},
					{
						text: `: ${userData.tglLahir}`,
						width: 160
					},
					{
						text: `Jenis Kelamin\t\t\t: ${userData.jenisKelamin}`,
					}
				]
			},
			{
				columns: [
					{
						text: '4. Alamat Rumah (KTP)',
						width: 160
					},
					{
						text: `: ${userData.alamatKtp}`
					}
				]
			},
			{
				columns: [
					{
						text: '5. Alamat Tinggal (Saat ini)',
						width: 160
					},
					{
						text: `: ${userData.alamatTinggal}`
					}
				]
			},
			{
					columns: [
					{
						text: '6. No. Telepon / HP',
						width: 160
					},
					{
						text: `: ${userData.noTelp}`
					}
				]
			},
			{
				text: 'B. DATA SUAMI / ISTRI',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: '7. Nama',
						width: 160
					},
					{
						text: `: ${userData.suamiIstriNamaKtp}`,
						width: 160
					},
					{
						text: `No. Buku Anggota\t: ${userData.suamiIstriNoAnggota}`
					}
				]
			},
			{
				columns: [
					{
						text: '8. Pekerjaan',
						width: 160
					},
					{
						text: `: ${userData.suamiIstriPekerjaan}`,
						width: 160
					},
					{
						text: `Jabatan Sekarang\t: ${userData.suamiIstriJabatan}`
					}
				]
			},
			{
				columns: [
					{
						text: '9. Alamat Perusahaan`',
						width: 160
					},
					{
						text: `: ${userData.suamiIstriAlamatKantor}`
					}
				]
			},
			{
				columns: [
					{
						text: '\u200B\tNo. Telp Perusahaan',
						width: 160
					},
					{
						text: `: ${userData.suamiIstriNoTelpKantor}`
					}
				]
			},
			{
				text: 'C. DATA KELUARGA TERDEKAT yang dapat dihubungi.',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: '10. Nama',
						width: 160
					},
					{
						text: `: ${userData.kerabatNamaKtp}`,
						width: 160
					},
					{
						text: `No. Buku Anggota\t: ${userData.kerabatNoAnggota}`
					}
				]
			},
			{
				columns: [
					{
						text: '11. Alamat',
						width: 160
					},
					{
						text: `: ${userData.kerabatAlamatKtp}`
					}
				]
			},
			{
				columns: [
					{
						text: '12. Hubungan dgn Pemohon',
						width: 160
					},
					{
						text: `: ${userData.kerabatStatusHubungan}`,
						width: 160
					},
					{
						text: `No. Telp\t: ${userData.kerabatNoTelp}`
					}
				]
			},
			{
				text: 'D. DATA KEUANGAN ANGGOTA',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: '13. Saldo Simpanan Saham',
						width: 180
					},
					{
						text: `: ${userData.saldoSimpananSaham}`,
						width: 130
					},
					{
						text: `16. Sisa Pinjaman: ${userData.saldoSisaPinjaman}`
					}
				]
			},
			{
				columns: [
					{
						text: '14. Saldo Simpanan Megapolitan',
						width: 180
					},
					{
						text: `: ${userData.saldoSimpananMegapolitan}`,
						width: 160
					}
				]
			},
			{
				columns: [
					{
						text: '15. Saldo Simpanan Multiguna',
						width: 180
					},
					{
						text: `: ${userData.saldoSimpananMultiguna}`,
						width: 160
					}
				]
			},
			{
				text: 'E. PINJAMAN YANG DIMOHON',
				style: 'sectionTitle'
			},
			{
				columns: [
					{
						text: '19. Jumlah Permohonan Pinjaman',
						width: 200
					},
					{
						text: `: ${userData.jumlahPermohonanPinjaman}`,
						width: 160
					}
				]
			},
			{
				columns: [
					{
						text: '',
						width: '40%'
					},
					{
						text: 'Satu Juta Rupiah',
						width: '60%'
					}
				]
			},
			{
				columns: [
					{
						text: '20. Jenis Pinjaman',
						width: 200
					},
					{
						text: `: ${userData.jenisPinjaman}`,
						width: 130
					},
					{
						text: `Jangka waktu pengembalian\t: ${userData.jangkaWaktuPinjaman}`,
						width: '60%'
					}
				]
			},
			{
				columns: [
					{
						text: '21. Tujuan Pinjaman',
						width: 200
					},
					{
						text: `: ${userData.tujuanPinjaman}`,
						width: 160
					}
				]
			},
			{
				columns: [
					{
						text: '22. Jaminan yang akan diserahkan',
						width: 200
					},
					{
						text: `: ${userData.jaminanPinjaman}`,
						width: '60%'
					}
				]
			},
			{
				columns: [
					{
						text: '23. Pemilik Jaminan',
						width: 200
					},
					{
						text: `: ${userData.pemilikJaminan}`,
						width: 130
					},
					{
						text: `Status Jaminan\t: ${userData.statusJaminan}`,
						width: '60%'
					}
				]
			},
			{
				columns: [
					{
						text: '24. Lokasi/Kondisi',
						width: 200
					},
					{
						text: `: ${userData.lokasiKondisiJaminan}`,
						width: 130
					},
					{
						text: `Harga Jaminan\t: ${userData.hargaJaminan}`,
						width: '60%'
					}
				]
			},
			{
				columns: [
					{
						text: '25. Kemampuan Bayar Bulanan',
						width: 200
					},
					{
						text: `: ${userData.bayaranPerbulan}`,
						width: 100
					},
					{
						text: '(Seratus Ribu Rupiah)',
						width: '30%'
					}
				]
			},
			{
				columns: [
					{
						text: 'Demikian surat permohonan ini saya buat sesuai dengan keadaan yang sebenarny',
						width: '100%'
					}
				]
			},
			{
				columns: [
					{
						text: 'Pemohon',
						width: '25%',
						alignment: 'center'
					},
					{
						text: 'Mengetahui \nSuami/Istri',
						width: '25%',
						alignment: 'center'
					},
					{
						text: 'Penjamin/Kordinator KBA',
						width: '25%',
						alignment: 'center'
					},
					{
						text: 'Staf Pemeriksa',
						width: '25%',
						alignment: 'center'
					}
				]
			},
			'\n\n',
			{
				columns: [
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					},
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					},
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					},
					{
						text: '(.....................)',
						width: '25%',
						alignment: 'center'
					}
				]
			},
			{
				columns: [
					{
						text: 'No BA:',
						width: '25%'
					},
					{
						text: 'No BA:',
						width: '25%'
					},
					{
						text: 'No BA:',
						width: '25%'
					},
					{
						text: 'No BA:',
						width: '25%'
					}
				]
			},
			{
				columns: [
					{
						text: 'Kelengkapan Adm.',
						width: 120,
						fontSize: 10
					},
					{
						text: [
							'1\tFC KTP Suami/Istri 1 Lembar\n',
							'2\tFC Kartu Keluarga 1 Lembar\n',
							'3\tFC Surat Nikah 1 Lembar\n',
							'4\tSurat Ket. Domisili asli dari kelurahan\n',
							'5\tFC Sertifikat DIKSAR 1 Lembar\n',
							'6\tFC Sertifikat Literasi Keuangan 1 Lembar\n',
							'7\tFC Surat Keterangan Kerja\n',
							'8\tFC Rek. Listrik, air, dan telpon\n'
						],
						width: '45%',
						fontSize: 10
					},
					{
						text: [
							'9\tFC Slip Gaji 3 bulan terakhir\n',
							'10\tFC Rek. Koran Bank (bukti transfer gaji)\n',
							'11\tFC Rek. Koran Kartu Kredit 3 bulan terakhir\n',
							'12\tFC Surat Ket. Usaha/SIUP/Akte Pendirian\n',
							'13\tFC Surat Barang Jaminan\n',
							'14\tFC Surat Perintah Kerja (SPK)\n',
							'15\tFC Laporan Usaha 3 bulan terakhir\n',
							'16\tRincian Pennggunaan Dana\n',
							'17\tSurat Ket. Belum memiliki rumah (asli)\n'
						],
						width: '50%',
						fontSize: 10
					}
				]
			},
			'\n\n',
			{
				text: 'Pinjam dan Kelola Uang Sesuai Kemampuan Anda',
				bold: true,
				alignment: 'center'
			}
		],
		styles: {
			header: {
				fontSize: 18,
				bold: true,
				alignment: 'center'
			},
			bigger: {
				fontSize: 15,
				italics: true
			},
			sectionTitle: {
				bold: true
			},
			w30: {
				width: '30%'
			}
		},
		defaultStyle: {
			columnGap: 0,
			lineHeight: 2
		},
		images: {
			headerImg: imageData
		}
	};
};

export default templatePdf;